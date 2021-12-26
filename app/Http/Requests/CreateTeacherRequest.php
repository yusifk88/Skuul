<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class CreateTeacherRequest extends FormRequest
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
    #[ArrayShape(['first_name' => "string", 'last_name' => "string", 'gender' => "string", 'phone_number' => "string"])]
    public function rules(): array
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'gender' => 'required',
            'phone_number' => 'required'
        ];
    }
}
