import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='md:w-full mx-auto w-[18rem]'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            apiKey="iivimj0xzyblofenmm9g08s84xvx2cyzs2s2x5hbr8r2sat9" // Free public key
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons',
                'image', 'link', 'lists', 'media', 'searchreplace',
                'table', 'visualblocks', 'wordcount', 'code', 'fullscreen', 'preview'
              ],
              toolbar:
                'undo redo | blocks | bold italic underline strikethrough | ' +
                'link image media table | alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | emoticons charmap | code preview fullscreen | removeformat',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
