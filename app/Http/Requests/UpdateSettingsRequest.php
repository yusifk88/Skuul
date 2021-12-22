<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class UpdateSettingsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return \Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    #[ArrayShape(['class_work_ratio' => "string", 'project_work_ratio' => "string", 'exam_ratio' => "string"])]
    public function rules(): array
    {
        return [
            'class_work_ratio'=>'required|numeric',
            'project_work_ratio'=>'required|numeric',
            'exam_ratio'=>'required|numeric'
        ];
    }
}
