<?php

namespace App\Http\Resources;

use App\Models\SchoolClass;
use App\Models\Subject;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class SubjectAssignemntResource extends JsonResource
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

        $data['subject'] = Subject::find($this->subject_id);
        $data['class'] = SchoolClass::find($this->class_id);
        return $data;

    }
}
