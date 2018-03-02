<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/3/2
 * Time: 16:33
 */

namespace App\Http\Controllers;


class IndexController extends Controller {

    public function index() {
        return [
            'title' => 'This is a msg',
            'msg' => 'A msg from api'
        ];
    }
}