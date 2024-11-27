import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://fakerestapi.azurewebsites.net/api/v1/Books", data)
      .then(() => navigate("/"))
      .catch((error) => console.error("Erro ao adicionar livro", error));
      console.log('Livro adicionado!')
      console.log(data)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Adicionar Livro</h2>

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

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddBook;
