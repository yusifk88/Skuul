<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSubjectRequest;
use App\Http\Resources\SubjectResource;
use App\Models\Subject;
use App\Repositories\SubjectRepository;
use Auth;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class SubjectsController extends Controller
{

    public function index(): JsonResponse
    {
        $subjects = Subject::orderBy('name')
            ->where('school_id', Auth::user()->school_id)
            ->get();
        return success(SubjectResource::collection($subjects), 'Subjects retrieved');
    }


    public function store(CreateSubjectRequest $request): JsonResponse
    {
        if (Subject::where('name',$request->name)->where('school_id',Auth::user()->school_id)->exists()){
            return error([],"Subject with name ".$request->name." already exist",Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $subject = SubjectRepository::create($request);
        return success(new SubjectResource($subject), 'Subject created');

    }


    public function update(CreateSubjectRequest $request, $subject_id): JsonResponse
    {
        $subject = SubjectRepository::update($request, $subject_id);
        return success(new SubjectResource($subject), "Subject updated");

    }
}
