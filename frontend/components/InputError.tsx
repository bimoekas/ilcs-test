import { Label } from "./ui/label";

interface InputErrorProps {
  message: string | undefined;
}

const InputError = ({ message }: InputErrorProps) => {
  return <Label className="font-medium text-red-500 text-xs">{message}</Label>;
};

export default InputError;
