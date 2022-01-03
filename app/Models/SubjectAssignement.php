<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubjectAssignement extends Model
{
    use HasFactory;
    protected $table="subject_assingments";
    protected $fillable = ['teacher_id','subject_id','class_id'];
}
