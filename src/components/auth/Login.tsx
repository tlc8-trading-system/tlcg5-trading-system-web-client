import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Lock, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../api/features/authentication/auth-queries";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginMutation = LoginUser(navigate);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (loginMutation.isPending) return;
        loginMutation.mutate({ email, password });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
            <Card className="w-full max-w-md shadow-sm">
                <CardHeader className="space-y-2">
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        Sign in to your trading account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>
                        

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="space-y-3">
                            <Button type="submit" className="w-full h-11" disabled={loginMutation.isPending}>
                                {loginMutation.isPending ? "Signing In..." : "Sign In"}
                            </Button>
                        </div>

                        <button
                                type="button"
                                onClick={() => navigate('/register')}
                                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                            Don't have an account? Register
                        </button>

                    </form>
                </CardContent>

            </Card>

        </div>
    )
}