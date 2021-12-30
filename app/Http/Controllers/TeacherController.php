<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTeacherRequest;
use App\Http\Resources\TeacherResource;
use App\Models\Teacher;
use App\Repositories\SchoolRepository;
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

    public function update(CreateTeacherRequest $request, $id): JsonResponse
    {
        if (!Teacher::find($id)) {
            return error([], "Teacher not found", Response::HTTP_NOT_FOUND);
        }

        $teacher = TeacherRepository::update($request, $id);
        return success(new TeacherResource($teacher), "Teacher updated");
    }

}
