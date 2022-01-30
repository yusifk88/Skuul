<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateGradeRequest;
use App\Http\Resources\GradeResource;
use App\Http\Resources\SchoolClassResource;
use App\Models\Grade;
use App\Models\SchoolClass;
use App\Repositories\GradeRepository;
use App\Repositories\SchoolRepository;
use Auth;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class GradesController extends Controller
{
    public function store(CreateGradeRequest $request): JsonResponse
    {
        if (Grade::where('name', $request->name)->where('school_id', SchoolRepository::CurrentSchool()->id)->exists()) {
            return error([], "Grade with name " . $request->name . " already exist",Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $grade = GradeRepository::create($request);
        return success(new GradeResource($grade), "Created grade, " . $grade->name);
    }


    public function index(): JsonResponse
    {

        $user = Auth::user();
        $grades = Grade::where('school_id', $user->school_id)->orderBy('name')->get();
        return success(GradeResource::collection($grades), 'Grades retrieved');

    }

    public function update(CreateGradeRequest $request, $id): JsonResponse
    {


        $grade = GradeRepository::update($request, $id);
        return success(new GradeResource($grade), "Grade updated");

    }

    public function show($id): JsonResponse
    {
        $grade = Grade::find($id);
        if ($grade) {

            return success(new GradeResource($grade), "Retrieved grade " . $grade->name);
        }

        return error([], 'Grade not found');
    }


    public function classes(int $id): JsonResponse
    {

        $classes = SchoolClass::where('grade_id',$id)->orderBy('name')->get();
        return success(SchoolClassResource::collection($classes),"Classes for this grade retrieved");

    }



}
