<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSchoolRequest;
use App\Http\Requests\UpdateSettingsRequest;
use App\Http\Resources\SchoolResource;
use App\Repositories\SchoolRepository;
use Illuminate\Http\JsonResponse;

class SchoolsController extends Controller
{
    /**
     * @param CreateSchoolRequest $request
     * @return JsonResponse
     */
    public function store(CreateSchoolRequest $request): JsonResponse
    {
        $school = SchoolRepository::create($request);
        return success(new SchoolResource($school), "School created successfully");

    }

    public function updateSettings($id, UpdateSettingsRequest $request): JsonResponse
    {
        $settings = SchoolRepository::UpdateSettings($id,$request);
        return success($settings,"Settings updated successfully");

    }


}
