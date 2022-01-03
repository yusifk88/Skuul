<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSubjectAssignemntRequest;
use App\Http\Requests\CreateTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Http\Resources\SubjectAssignemntResource;
use App\Http\Resources\TeacherResource;
use App\Models\SubjectAssignement;
use App\Models\Teacher;
use App\Repositories\SchoolRepository;
use App\Repositories\SubjectAssingmentsRepository;
use App\Repositories\TeacherRepository;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class TeacherController extends Controller
{

    public function index(): JsonResponse
    {
        $teachers = Teacher::where('school_id', SchoolRepository::CurrentSchool()->id)
            ->orderBy('first_name')->get();
        return success(TeacherResource::collection($teachers), "Teachers retrieved");

    }

    public function store(CreateTeacherRequest $request): JsonResponse
    {

        if (Teacher::where('staff_id', $request->staff_id)->where('school_id', SchoolRepository::CurrentSchool()->id)->exists() && $request->staff_id) {
            return error([], "Teacher with staff number " . $request->staff_id . " already exist", Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $teacher = TeacherRepository::create($request);
        return success(new TeacherResource($teacher), "Teacher created");

    }

    public function update(UpdateTeacherRequest $request, $id): JsonResponse
    {
        if (!Teacher::find($id)) {
            return error([], "Teacher not found", Response::HTTP_NOT_FOUND);
        }

        $teacher = TeacherRepository::update($request, $id);
        return success(new TeacherResource($teacher), "Teacher updated");
    }


    public function show($id): JsonResponse
    {

        $teacher = Teacher::find($id);
        if (!$teacher) {
            return error([], "teacher not found", Response::HTTP_NOT_FOUND);
        }

        return success(new TeacherResource($teacher), "Teacher information retrieved");

    }

    public function AssignSubjects(CreateSubjectAssignemntRequest $request, $teacher_id): JsonResponse
    {

        if (!Teacher::where('school_id', SchoolRepository::CurrentSchool()->id)->where('id', $teacher_id)->exists()) {
            return error([], 'Teacher not found', Response::HTTP_NOT_FOUND);
        }

        $subjectExists = SubjectAssignement::where('class_id', $request->class_id)
            ->where('subject_id', $request->subject_id)
            ->exists();
        if ($subjectExists) {
            return error([], 'This subject and class was already assigned', Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $assignment = SubjectAssingmentsRepository::AssignSubject($request, $teacher_id);

        return success(new SubjectAssignemntResource($assignment), "Subject assigned successfully");


    }


    public function GetAssignments($teacher_id): JsonResponse
    {
        $assignments = SubjectAssignement::where('teacher_id', $teacher_id)->get();
        return success(SubjectAssignemntResource::collection($assignments), "Subject assignments retrieved");

    }


    public function DetachAssignment(int $id): JsonResponse
    {

        $assignment = SubjectAssignement::find($id);
        if (!$assignment) {
            return error([], "Subject assignment record not found", Response::HTTP_NOT_FOUND);
        }
        $assignment->delete();


        return success([], 'Suject Assignment detached from teacher');
    }

}
