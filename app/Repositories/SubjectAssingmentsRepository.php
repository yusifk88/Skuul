<?php

namespace App\Repositories;

use App\Http\Requests\CreateSubjectAssignemntRequest;
use App\Models\SubjectAssignement;

class SubjectAssingmentsRepository
{


    public static function AssignSubject(CreateSubjectAssignemntRequest $request, int $teacher_id): SubjectAssignement
    {


        $assingment = new SubjectAssignement([
            'teacher_id' => $teacher_id,
            'subject_id' => $request->subject_id,
            'class_id' => $request->class_id
        ]);

        $assingment->save();
        return $assingment;


    }


}
