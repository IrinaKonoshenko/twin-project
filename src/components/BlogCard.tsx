interface BlogCardProps {
  img: string;
  title: string;
  description: string;
  createdDate: string;
  status?: "active" | "draft";
}

function StatusProvider({ status }: { status: BlogCardProps["status"] }) {
  if (!status) {
    return null;
  }

  if (status === "active") {
    return <Status color="red" text="Active" />;
  }

  if (status === "draft") {
    return <Status color="blue" text="draft" />;
  }

  return null;
}
