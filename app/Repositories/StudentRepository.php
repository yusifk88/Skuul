<?php

namespace App\Repositories;

use App\Http\Requests\CreateStudentRequest;
use App\Models\Student;
use Auth;

class StudentRepository
{

    public static function create(CreateStudentRequest $request): Student
    {

        $user = Auth::user();
        $data = $request->all();
        if ($request->hasFile('photo')) {
            $data['photo_url'] = $request->file('photo')->store('student_photos');
        }
        $data['school_id'] = $user->school_id;
        $student = new Student($data);
        $student->save();
        return $student;

    }

    public static function update(CreateStudentRequest $request, $id): Student
    {

        $student = Student::find($id);
        $student->update($request->all());
        return $student;

    }


}