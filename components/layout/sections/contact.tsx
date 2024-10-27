"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	firstName: z.string().min(2).max(255),
	lastName: z.string().min(2).max(255),
	email: z.string().email(),
	subject: z.string().min(2).max(255),
	message: z.string(),
});

export const ContactSection = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "Web Development",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const { firstName, lastName, email, subject, message } = values;
		console.log(values);
	}

	return (
		<section id="contact" className="container py-24 sm:py-32">
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<div className="mb-4">
						<h2 className="text-lg text-primary mb-2 tracking-wider">
							Contato
						</h2>

						<h2 className="text-3xl md:text-4xl font-bold">
							Entre em contato com a gente
						</h2>
					</div>
					<p className="mb-8 text-muted-foreground lg:w-5/6">
						Envie mensagem pelo nosso site ou por nosso e-mail. Iremos responder
						em até 1 (um) dia útil.
					</p>

					<div className="flex flex-col gap-4">
						{/* <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Call us</div>
              </div>

              <div>+1 (619) 123-4567</div>
            </div> */}

						<div>
							<div className="flex gap-2 mb-1">
								<div className="text-primary font-bold">Nosso e-mail</div>
							</div>

							<div className="mt-3 text-white/90 font-normal tracking-wider">
								jogaiapp@gmail.com
							</div>
						</div>

						<div className="mt-3">
							<div className="flex gap-2">
								<div className=" text-primary font-bold">
									Horário de Atendimento
								</div>
							</div>

							<div className="mt-3 text-white/90 font-normal tracking-wider gap-4">
								<div>Segunda - Sexta</div>
								<div>9:00 - 17:00</div>
							</div>
						</div>
					</div>
				</div>

				<Card className="bg-muted/60 dark:bg-card">
					<CardHeader className="text-primary text-2xl"> </CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="grid w-full gap-4"
							>
								<div className="flex flex-col md:!flex-row gap-8">
									<FormField
										control={form.control}
										name="firstName"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormLabel>Primeiro nome</FormLabel>
												<FormControl>
													<Input placeholder="Nome" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="lastName"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormLabel>Sobrenome</FormLabel>
												<FormControl>
													<Input placeholder="Sobrenome" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className="flex flex-col gap-1.5">
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>E-mail</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="seuemail@email.com"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className="flex flex-col gap-1.5">
									<FormField
										control={form.control}
										name="subject"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Assunto</FormLabel>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select a subject" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="Planos">Planos</SelectItem>
														<SelectItem value="Sistema">
															Dúvidas sobre o sistema
														</SelectItem>
														<SelectItem value="Contato">
															Apenas contato
														</SelectItem>
														<SelectItem value="Outro">Outro</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className="flex flex-col gap-1.5">
									<FormField
										control={form.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Mensagem</FormLabel>
												<FormControl>
													<Textarea
														rows={5}
														placeholder="Sua mensagem..."
														className="resize-none"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<Button className="mt-4 text-black">Enviar Mensagem</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</section>
		</section>
	);
};
