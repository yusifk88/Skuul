<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class School extends Model
{
    use HasFactory;

    protected $table = 'schools';

    protected $fillable = ['name', 'email', 'phone_number', 'address', 'code', 'crest_url'];

    public function settings(): HasOne
    {
        return $this->hasOne(SchoolSetting::class, 'school_id', 'id');

    }

    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class, 'school_id', 'id');
    }


}
