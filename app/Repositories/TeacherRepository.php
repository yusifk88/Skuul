<?php

namespace App\Repositories;

use App\Http\Requests\CreateTeacherRequest;
use App\Models\Teacher;
use Auth;

class TeacherRepository
{

    public static function create(CreateTeacherRequest $request): Teacher
    {

        $data = $request->all();
        $data['school_id'] = Auth::user()->school_id;
        $teacher = new Teacher($data);
        $teacher->save();
        return $teacher;

    }


    public static function update(CreateTeacherRequest $request, int $id): Teacher
    {
        $teacher = Teacher::find($id);

        $teacher->update($request->all());

        return $teacher;

    }


}
