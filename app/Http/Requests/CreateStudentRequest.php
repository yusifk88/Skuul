<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class CreateStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    #[ArrayShape(['first_name' => "string", 'last_name' => "string", 'dbo' => "string", 'gender' => "string", 'admission_date' => "string", 'caretaker_name' => "string", 'caretaker_phone_number' => "string", 'class_id' => "string"])]
    public function rules(): array
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'dob' => 'required|date',
            'gender' => 'required|in:M,F',
            'admission_date' => 'required|date',
            'guardian_first_name' => 'required',
            'guardian_last_name' => 'required',
            'guardian_phone_number' => 'required',
            'class_id' => 'required|numeric|exists:school_classes,id'
        ];
    }
}
