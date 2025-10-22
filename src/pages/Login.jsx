import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SimpleRegistrationForm() {
  return (
    <div
      className="min-h-screen bg-cover bg-center  flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://chatgpt.com/backend-api/estuary/content?id=file_00000000d0b8622fbf1dbf1050dea8fa&ts=489063&p=fs&cid=1&sig=9e77c8d53072dd7b662c9b9f99e788a4fb1b6b7141183b0dca1c2a5106493e62&v=0')",
      }}
    >
      {/* qora yarim shaffof qatlam */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Card
        color="transparent"
        shadow={false}
        className="relative z-10 backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20"
      >
        <Typography variant="h4" color="white" className="text-center">
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 font-normal text-center">
          Nice to meet you! Enter your details to register.
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              className="text-white placeholder-white/60"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your email"
              className="text-white placeholder-white/60"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Enter your password"
              className="text-white placeholder-white/60"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Checkbox
            label={
              <Typography
                variant="small"
                color="white"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium text-blue-300 hover:text-red-400 transition-colors"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button
            className="mt-6 bg-black/70 hover:bg-black text-white font-semibold"
            fullWidth
          >
            SIGN UP
          </Button>

          <Typography color="white" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-white hover:underline">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
