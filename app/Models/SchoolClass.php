<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SchoolClass extends Model
{
    use HasFactory;

    protected $table = 'school_classes';
    protected $fillable = ['name', 'description', 'grade_id'];

    public function grade(): BelongsTo
    {
        return $this->belongsTo(Grade::class, "grade_id", 'id');
    }

}
