<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolSetting extends Model
{

    use HasFactory;
    protected $table = "school_settings";
    protected $fillable = ['class_work_ratio','project_work_ratio','exam_ratio','school_id'];
}
