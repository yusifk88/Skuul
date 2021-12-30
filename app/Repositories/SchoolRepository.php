<?php

namespace App\Repositories;

use App\Http\Requests\CreateSchoolRequest;
use App\Http\Requests\UpdateSettingsRequest;
use App\Models\School;
use App\Models\SchoolSetting;
use Auth;

class SchoolRepository
{
    public static function create(CreateSchoolRequest $request): School
    {
        $data = $request->all();
        if ($request->hasFile('crest')) {
            $data['crest_url'] = $request->file('crest')->store('school_crest');
        }
        $school = new School($data);
        $school->save();

        self::SetupSettings($school->id);

        $user = Auth::user();
        $user->school_id = $school->id;
        $user->update();

        return $school;

    }


    public static function SetupSettings(int $school_id): SchoolSetting
    {
        $settings = new SchoolSetting(['school_id' => $school_id]);
        $settings->save();
        return $settings;
    }


    public static function UpdateSettings($id, UpdateSettingsRequest $request)
    {

        $settings = SchoolSetting::find($id);
        $settings->update($request->all());
        return $settings;

    }



    public static function CurrentSchool(){
        $user = Auth::user();
        return School::find($user->school_id);

    }

}
