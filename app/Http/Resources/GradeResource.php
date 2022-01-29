<?php

namespace App\Http\Resources;

use App\Models\SchoolClass;
use App\Models\Student;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GradeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {

        $data = parent::toArray($request);
        $data['classes'] = SchoolClass::where('grade_id', $this->id)->count();
        $data['students'] = Student::whereIn('class_id', SchoolClass::select('id')->where('grade_id', $this->id))->count();
        return $data;
    }
}
