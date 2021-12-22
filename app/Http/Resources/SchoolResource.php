<?php

namespace App\Http\Resources;

use App\Models\SchoolSetting;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SchoolResource extends JsonResource
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
        $data['crest_url'] = $this->crest_url ?? "/img/photo.jpg";
        $data['settings']=$this->settings;
        return $data;
    }
}
