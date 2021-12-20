<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    #[ArrayShape(['first_name' => "string", 'last_name' => "string", 'phone_number' => "string", 'email' => "string",'password'=>'string'])]
    public function rules(): array
    {
        return [
            'first_name'=>'required',
            'last_name'=>'required',
            'phone_number'=>'required|unique:users,phone_number',
            'email'=>'required|unique:users,email',
            'password'=>'required|same:password_confirmation|min:8'
        ];

    }
}
