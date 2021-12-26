<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        $data= parent::toArray($request);
        $data['photo_url'] = $this->photo_url ? config('app.url').'/'.$this->photo_url : '/img/photo.png';
        return $data;
    }
}
