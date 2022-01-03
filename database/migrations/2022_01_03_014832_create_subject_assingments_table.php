<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectAssingmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('subject_assingments', function (Blueprint $table) {

            $table->id();
            $table->unsignedBigInteger('teacher_id');
            $table->unsignedBigInteger('subject_id');
            $table->unsignedBigInteger('class_id');
            $table->foreign('teacher_id')->references('id')->on('teachers');
            $table->foreign('subject_id')->references('id')->on('subjects');
            $table->foreign('class_id')->references('id')->on('school_classes');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subject_assingments');
    }
}
