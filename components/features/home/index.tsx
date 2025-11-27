"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <h1>Home</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        header="Home Page Modal"
      >
        <div>
          <h2>Home</h2>
        </div>
      </Modal>
    </section>
  );
};

export default Home;
