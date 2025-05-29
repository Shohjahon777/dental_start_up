import { useState } from "react";
import { Mic, MicOff, Volume2, Play, Pause, Sparkles, Stethoscope, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AIPatient() {
	const [isListening, setIsListening] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [conversationStarted, setConversationStarted] = useState(false);

	const handleStartConversation = () => {
		setConversationStarted(true);
		setIsPlaying(true);
		// Simulate conversation start
		setTimeout(() => setIsPlaying(false), 3000);
	};

	const toggleListening = () => {
		setIsListening(!isListening);
	};

	return (
		<Card className="h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-0 shadow-xl">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl animate-spin-slow"></div>
			</div>

			<CardContent className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
				{/* AI Avatar Section */}
				<div className="relative mb-8">
					{/* Outer glow ring */}
					<div className={`absolute inset-0 rounded-full transition-all duration-1000 ${
						isListening
							? 'animate-ping bg-gradient-to-r from-green-400 to-emerald-500 opacity-75'
							: isPlaying
								? 'animate-pulse bg-gradient-to-r from-blue-400 to-indigo-500 opacity-60'
								: 'bg-gradient-to-r from-blue-300 to-purple-300 opacity-40'
					}`}></div>

					{/* Middle ring */}
					<div className={`absolute inset-2 rounded-full transition-all duration-500 ${
						isListening
							? 'bg-gradient-to-r from-green-300 to-emerald-400 animate-pulse'
							: isPlaying
								? 'bg-gradient-to-r from-blue-300 to-indigo-400 animate-pulse'
								: 'bg-gradient-to-r from-slate-200 to-blue-200'
					}`}></div>

					{/* Main avatar */}
					<div className={`relative w-32 h-32 rounded-full bg-gradient-to-br from-white to-slate-100 flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-300 ${
						isListening || isPlaying ? 'scale-110' : 'scale-100'
					}`}>
						{isListening ? (
							<div className="flex space-x-1">
								<div className="w-1 h-8 bg-gradient-to-t from-green-400 to-emerald-500 rounded-full animate-bounce"></div>
								<div className="w-1 h-6 bg-gradient-to-t from-green-400 to-emerald-500 rounded-full animate-bounce delay-100"></div>
								<div className="w-1 h-10 bg-gradient-to-t from-green-400 to-emerald-500 rounded-full animate-bounce delay-200"></div>
								<div className="w-1 h-7 bg-gradient-to-t from-green-400 to-emerald-500 rounded-full animate-bounce delay-300"></div>
							</div>
						) : isPlaying ? (
							<Volume2 className="h-12 w-12 text-blue-600 animate-pulse" />
						) : (
							<div className="relative">
								<Bot className="h-12 w-12 text-slate-600" />
								<Sparkles className="h-4 w-4 text-blue-500 absolute -top-2 -right-2 animate-bounce" />
							</div>
						)}
					</div>
				</div>

				{/* Status Indicator */}
				<div className="flex items-center space-x-2 mb-6">
					<div className={`w-3 h-3 rounded-full transition-all duration-300 ${
						isListening
							? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/50'
							: isPlaying
								? 'bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50'
								: 'bg-slate-400'
					}`}></div>
					<span className="text-sm font-medium text-slate-600">
                        {isListening ? 'Listening...' : isPlaying ? 'Speaking...' : 'Ready'}
                    </span>
				</div>

				{/* Title and Description */}
				<div className="text-center mb-8">
					<div className="flex items-center justify-center space-x-2 mb-3">
						<Stethoscope className="h-6 w-6 text-blue-600" />
						<h2 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
							AI Virtual Patient
						</h2>
					</div>
					<p className="text-slate-600 text-center leading-relaxed max-w-sm">
						Experience realistic patient interactions. Listen to symptoms, ask questions, and practice your diagnostic skills.
					</p>
				</div>

				{/* Control Buttons */}
				<div className="flex flex-col items-center space-y-4 w-full max-w-xs">
					{!conversationStarted ? (
						<Button
							onClick={handleStartConversation}
							className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
						>
							<Play className="h-5 w-5" />
							<span>Start Consultation</span>
						</Button>
					) : (
						<div className="flex space-x-3 w-full">
							<Button
								onClick={toggleListening}
								variant={isListening ? "default" : "outline"}
								className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
									isListening
										? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25'
										: 'border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50'
								}`}
							>
								{isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
							</Button>

							<Button
								onClick={() => setIsPlaying(!isPlaying)}
								variant="outline"
								className="flex-1 py-3 px-4 rounded-xl font-medium border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 transition-all duration-200 transform hover:scale-105"
							>
								{isPlaying ? <Pause className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
							</Button>
						</div>
					)}

					{conversationStarted && (
						<p className="text-xs text-slate-500 text-center mt-3 animate-fade-in">
							Click the microphone when you're ready to respond
						</p>
					)}
				</div>

				{/* Progress indicator for conversation */}
				{conversationStarted && (
					<div className="w-full max-w-xs mt-6">
						<div className="h-1 bg-slate-200 rounded-full overflow-hidden">
							<div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-progress"></div>
						</div>
					</div>
				)}
			</CardContent>

		</Card>
	);
}