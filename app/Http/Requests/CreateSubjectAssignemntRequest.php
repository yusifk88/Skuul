<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class CreateSubjectAssignemntRequest extends FormRequest
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
    #[ArrayShape(['teacher_id' => "string", 'subject_id' => "string", 'classes' => "string"])]
    public function rules(): array
    {
        return [
            'subject_id'=>'required|numeric|exists:subjects,id',
            'class_id'=>'required|numeric'
        ];
    }
}
