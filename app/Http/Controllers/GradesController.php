<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateGradeRequest;
use App\Http\Resources\GradeResource;
use App\Models\Grade;
use App\Repositories\GradeRepository;
use Auth;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class GradesController extends Controller
{
    public function store(CreateGradeRequest $request): JsonResponse
    {
        $user = Auth::user();
        if (Grade::where('name', $request->name)->where('school_id', $user->school_id)->exists()) {
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

}
