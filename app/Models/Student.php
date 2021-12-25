<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    use HasFactory;

    protected $table = "students";
    protected $fillable = ['first_name', 'last_name', 'other_names', 'previous_school',
        'dob', 'admission_date', 'gender', 'residential_status', 'photo_url', 'address',
        'guardian_first_name','guardian_last_name', 'guardian_email', 'guardian_phone_number',
        'class_id', 'school_id'];


    protected $casts=[
        'active'=>'bool',
        'dob'=>'date',
        'admission_date'=>'date'

    ];
    public function studentClass(): BelongsTo
    {
        return $this->belongsTo(SchoolClass::class, 'class_id', 'id');
    }
}
