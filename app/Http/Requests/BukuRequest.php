<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BukuRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'judul' => ['required', 'max:255', 'string', 'min:3'],
            'penulis' => ['required', 'max:255', 'string', 'min:3'],
            'deskripsi' => ['required', 'string', 'min:3'],
            'tahun_terbit' => ['required', 'max:' . now()->year, 'integer', 'min:1800'],
        ];
    }
}
