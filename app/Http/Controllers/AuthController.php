<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Http\Resources\UserResource;
use App\Repositories\AuthenticationRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function signup($type,SignupRequest $request): JsonResponse
    {
        $signup = AuthenticationRepository::signup($type,$request);
        return success($signup, "Signup successful");
    }



    public function user(Request $request){
        $user =  $request->user();
        return success($user,"Welcome, Account initialized");
    }

}
