<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSchoolRequest;
use App\Http\Requests\CreatSchoolClassRequest;
use App\Http\Resources\SchoolClassResource;
use App\Models\Grade;
use App\Models\SchoolClass;
use App\Repositories\ClassesRepository;
use Auth;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class SchoolClassesController extends Controller
{

    public function index(): JsonResponse
    {
        $classes = SchoolClass::with('grade')->whereIn('grade_id', Grade::select('id')->where('school_id', Auth::user()->school_id))
            ->orderBy('name')->get();
        return success(SchoolClassResource::collection($classes), 'Classes retrieved');
    }

    public function show($id): JsonResponse
    {
        $Class = SchoolClass::find($id);
        if ($Class) {
            return success(new SchoolClassResource($Class), 'Class ' . $Class->name . " retrieved");
        }
        return error([], "Class not found", Response::HTTP_NOT_FOUND);
    }

    public function store(CreatSchoolClassRequest $request): JsonResponse
    {
        $class = ClassesRepository::create($request);
        return success(new SchoolClassResource($class), "Class created");

    }


    public function update(CreatSchoolClassRequest $request, $id): JsonResponse
    {

        $class = ClassesRepository::update($request, $id);
        return success(new SchoolClassResource($class), "Class updated");

    }

}
