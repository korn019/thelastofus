"use client";
import { Button, Modal } from "@mantine/core";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {}

const Popup: NextPage<Props> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("🚀 ~ isModalOpen:", isModalOpen);
  const [openCount, setOpenCount] = useState(0);
  console.log("🚀 ~ openCount:", openCount);
  const maxCount = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (openCount < maxCount) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [openCount]);

  const handleOpen = () => {
    if (openCount < maxCount) {
      setIsModalOpen(true); // เปิด Modal ทันที
    }
  };

  const handleClose = () => {
    setIsModalOpen(false); // ปิด Modal
    setOpenCount((prev) => prev + 1); // เพิ่มจำนวนครั้งที่เปิด
  };

  return (
    <>
      <Modal
        classNames={{
          body: "border-8 border-red-500 rounded-[0]",
        }}
        withCloseButton={false}
        centered
        size={"xl"}
        opened={isModalOpen}
        onClose={handleClose}
        transitionProps={{
          duration: 0,
        }}
       
      >
        <div className="p-10 space-y-11">
          <h1 className="font-semibold text-6xl text-center">
            อยากไปเที่ยวไหม?
          </h1>
          <div className="flex justify-around gap-10 items-center">
            <Button radius={"lg"} size="xl" fullWidth>
              ไปเลย
            </Button>
            <Button
              onClick={handleClose}
              variant="light"
              radius={"lg"}
              size="xl"
              fullWidth
            >
              ปิด
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
