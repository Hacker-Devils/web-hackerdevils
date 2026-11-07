import { Button, PageHeading } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHeading title="Wrong answer." lead="That page doesn’t exist.">
      <Button href="/">Back to the home page</Button>
    </PageHeading>
  );
}
