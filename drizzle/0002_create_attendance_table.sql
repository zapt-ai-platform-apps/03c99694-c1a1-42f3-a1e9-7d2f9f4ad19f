CREATE TABLE "attendance" (
  "id" SERIAL PRIMARY KEY,
  "card_number" VARCHAR(20) NOT NULL,
  "full_name" VARCHAR(255) NOT NULL,
  "birth_date" DATE NOT NULL,
  "grade_level" VARCHAR(50) NOT NULL,
  "entry_date" DATE NOT NULL,
  "entry_time" TIME NOT NULL,
  "status" VARCHAR(10) NOT NULL CHECK (status IN ('present', 'absent')),
  "created_at" TIMESTAMP DEFAULT NOW()
);