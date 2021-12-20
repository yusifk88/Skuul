<?php

namespace App\Repositories;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthenticationRepository
{
    public static function signup($type,SignupRequest $request): User
    {

        $data = $request->all();
        $data['password'] = Hash::make($request->password);
        $data['type'] = $type;

        $user = new User($data);
        $user->save();

        if ($user) {
            $user->token = $user->createToken($request->fingerprint())->plainTextToken;

        }

        return $user;

    }

}
