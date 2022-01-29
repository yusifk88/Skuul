<?php

namespace App\Http\Resources;

use App\Models\Student;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class SchoolClassResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request): array
    {
        $data = parent::toArray($request);
        $data['students'] = Student::where('class_id', $this->id)->count();
        return $data;

    }
}
