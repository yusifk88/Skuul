<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $table = "teachers";
    protected $fillable = ['first_name', 'last_name', 'other_names', 'gender', 'rank', 'staff_id', 'dob', 'ssnit_number',
        'id_number', 'academic_qualification', 'professional_qualification', 'appointment_date', 'date_assumed', 'bank',
        'account_number', 'email', 'phone_number', 'school_id'];

    protected $casts = [
        'dob' => 'date',
        'date_assumed' => 'date',
        'appointment_date' => 'date'

    ];
}
