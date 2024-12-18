import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Form() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  // Fonction pour envoyer le formulaire
  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_API_KEY);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      await Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        background: "#1A1A1A",
        confirmButtonText: "Ok",
        confirmButtonColor: "#FF9143",
      });
      // Réinitialise le formulaire
      reset();
    } else {
      await Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
        background: "#1A1A1A",
        confirmButtonText: "Ok",
        confirmButtonColor: "#FF9143",
      });
      console.log("Error", result);
    }
  };

  return (
    <form className="ml-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder={t("contact.form.name")}
          className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("name", { required: true, maxLength: 70 })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-red-500" role="alert">
            Please enter a valid name.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder={t("contact.form.email")}
          className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("email", { required: true, maxLength: 254 })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500" role="alert">
            Please enter a valid email.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder={t("contact.form.subject")}
          className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("subject", { required: true, maxLength: 100 })}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && (
          <p className="text-red-500" role="alert">
            Please fill out this field correctly.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          placeholder={t("contact.form.message")}
          maxLength={700} // Modifie si tu veux un maximum différent
          rows={6}
          className="w-full resize-none rounded-md bg-primary px-4 pt-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("message", { required: true, maxLength: 700 })}
          aria-invalid={errors.message ? "true" : "false"}
        ></textarea>
        {errors.message && (
          <p className="text-red-500" role="alert">
            Please fill out this field correctly.
          </p>
        )}
      </div>
      <button
        type="submit"
        className="!mt-6 rounded-md border border-orange bg-orange px-5 py-3 text-sm font-semibold tracking-wide text-primary transition-colors duration-300 hover:border hover:border-secondary hover:bg-btn md:text-base"
        aria-label="Send message"
      >
        {t("contact.form.send")}
      </button>
    </form>
  );
}

export default Form;
