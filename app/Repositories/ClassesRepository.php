<?php

namespace App\Repositories;

use App\Http\Requests\CreateSchoolRequest;
use App\Http\Requests\CreatSchoolClassRequest;
use App\Models\SchoolClass;

class ClassesRepository
{
    public static function create(CreatSchoolClassRequest $request): SchoolClass
    {
        $class = new SchoolClass($request->all());
        $class->save();
        return $class;

    }

    public static function update(CreatSchoolClassRequest $request, $id)
    {
        $class = SchoolClass::find($id);
        $class->update($request->all());
        return $class;

    }

}
