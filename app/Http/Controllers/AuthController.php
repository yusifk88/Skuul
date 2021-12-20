<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Repositories\AuthenticationRepository;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{

    public function signup($type,SignupRequest $request): JsonResponse
    {
        $signup = AuthenticationRepository::signup($type,$request);
        return success($signup, "Signup successful");
    }


}
