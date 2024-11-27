import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
      .then((response) => {
        const book = response.data;
        setValue("title", book.title);
        setValue("description", book.description);
        setValue("pageCount", book.pageCount);
        setValue("publishDate", book.publishDate);
      })
      .catch((error) => console.error("Erro ao carregar livro", error));
  }, [id, setValue]);

  const onSubmit = (data) => {
    axios
      .put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`, data)
      .then(() => {
        navigate("/");
        console.log(`Livro editado com sucesso`);
        console.log(data);
      })
      .catch((error) => console.error("Erro ao atualizar livro", error));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Livro</h2>

        <input
          type="text"
          {...register("title", { required: "Título é obrigatório" })}
          placeholder="Título"
        />
        {errors.title && (
          <p className="error-message">{errors.title.message}</p>
        )}

        <input
          type="text"
          {...register("description", { required: "Descrição é obrigatória" })}
          placeholder="Descrição"
        />
        {errors.description && (
          <p className="error-message">{errors.description.message}</p>
        )}

        <input
          type="number"
          {...register("pageCount", {
            required: "Número de páginas é obrigatório",
          })}
          placeholder="Número de páginas"
        />
        {errors.pageCount && (
          <p className="error-message">{errors.pageCount.message}</p>
        )}

        <input
          type="date"
          {...register("publishDate", {
            required: "Data de publicação é obrigatória",
          })}
          placeholder="Publicado em"
        />
        {errors.publishDate && (
          <p className="error-message">{errors.publishDate.message}</p>
        )}

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditBook;
