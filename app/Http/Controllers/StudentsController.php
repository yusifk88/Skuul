<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateStudentRequest;
use App\Http\Resources\StudentResource;
use App\Http\Resources\UtilityRepository;
use App\Models\Student;
use App\Repositories\StudentRepository;
use Auth;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class StudentsController extends Controller
{

    public function index(): JsonResponse
    {

        $user = Auth::user();
        $students = Student::with('studentClass')
            ->where('school_id', $user->school_id)
            ->orderBy('first_name')
            ->paginate(UtilityRepository::PER_PAGE);
        return success(StudentResource::collection($students), "Students retrieved");
    }


    public function store(CreateStudentRequest $request): JsonResponse
    {
        $student = StudentRepository::create($request);
        return success(new StudentResource($student), "Student, " . $student->first_name . " was created successfully");

    }


    public function update(CreateStudentRequest $request, $student_id): JsonResponse
    {
        if (!Student::where('id',$student_id)->exists()){
            return error([],"Student not found",Response::HTTP_NOT_FOUND);
        }

        $student = StudentRepository::update($request, $student_id);
        return success(new StudentResource($student), "Student updated");
    }
}
