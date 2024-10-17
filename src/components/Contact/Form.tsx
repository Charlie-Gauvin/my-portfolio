import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
          placeholder="Your Name"
          className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("name", { required: true, maxLength: 70 })}
        />
        {errors.name && (
          <p className="text-red-500">
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
          placeholder="Your Email"
          className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("email", { required: true, maxLength: 254 })}
        />
        {errors.email && (
          <p className="text-red-500">
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
          placeholder="Subject"
          className="w-full rounded-md bg-primary px-4 py-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("subject", { required: true, maxLength: 100 })}
        />
        {errors.subject && (
          <p className="text-red-500">
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
          placeholder="Your Message"
          maxLength={700} // Modifie si tu veux un maximum différent
          rows={6}
          className="w-full resize-none rounded-md bg-primary px-4 pt-3 text-sm text-black outline-orange focus:bg-transparent focus:text-primary"
          {...register("message", { required: true, maxLength: 700 })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500">
            Please fill out this field correctly.
          </p>
        )}
      </div>
      <button
        type="submit"
        className="!mt-6 rounded-md border border-orange bg-orange px-5 py-3 text-sm font-semibold tracking-wide text-primary transition-colors duration-300 hover:border hover:border-secondary hover:bg-btn md:text-base"
      >
        Send message
      </button>
    </form>
  );
}

export default Form;
