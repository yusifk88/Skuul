<?php

use Illuminate\Http\JsonResponse;

if (!function_exists('success')) {

    function success($data = [], $message = "Request process successfully", $code = 200): JsonResponse
    {

        return response()->json(['data' => $data, 'message' => $message], $code);

    }

}
if (!function_exists('error')) {

    function error($data = [], $message = "Request failed", $code = 500): JsonResponse
    {

        return response()->json(['data' => $data, 'message' => $message], $code);

    }

}
