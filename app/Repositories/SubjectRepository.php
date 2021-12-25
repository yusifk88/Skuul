<?php

namespace App\Repositories;

use App\Http\Requests\CreateSubjectRequest;
use App\Models\Subject;
use Auth;

class SubjectRepository
{
    /**
     * @param CreateSubjectRequest $request
     * @return Subject
     */
    public static function create(CreateSubjectRequest $request): Subject
    {

        $data = $request->all();
        $user = Auth::user();
        $data['school_id'] = $user->school_id;

        $subject = new Subject($data);
        $subject->save();
        return $subject;
    }


    /**
     * @param CreateSubjectRequest $request
     * @param $id
     * @return void
     */
    public static function update(CreateSubjectRequest $request, $id) : Subject
    {
        $subject = Subject::find($id);
        $subject->update($request->all());
        return $subject;


    }

}
