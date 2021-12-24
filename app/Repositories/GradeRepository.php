<?php

namespace App\Repositories;

use App\Http\Requests\CreateGradeRequest;
use App\Models\Grade;
use Auth;

class GradeRepository
{

    public static function create(CreateGradeRequest $request): Grade
    {

        $data = $request->all();
        $data['school_id'] = Auth::user()->school_id;
        $grade = new Grade($data);
        $grade->save();
        return $grade;
    }


    public static function update(CreateGradeRequest $request, $grade_id): Grade
    {
        $grade = Grade::find($grade_id);
        $grade->update($request->all());
        return $grade;
    }

}
