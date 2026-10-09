import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Eyebrow, Grid, Section, SectionHeading } from "@/components/ui";
import MenuCard from "@/components/MenuCard/MenuCard";
import { ROUTES, menuCategoryPath } from "@/constants/routes";
import { getMenuCategory, getMenuItem, getRelatedItems } from "@/data/menu";
import { useCart } from "@/features/cart";
import { formatPrice } from "@/lib/format";
import styles from "./MenuItem.module.css";

export default function MenuItem() {
  const { itemSlug } = useParams();
  const item = getMenuItem(itemSlug);

  if (!item) return <ItemNotFound />;

  const category = getMenuCategory(item.category);
  const groupLabel = item.subcategoryLabel ?? category.label;
  const related = getRelatedItems(item);

  return (
    <>
      <title>{`${item.name} | Arvane Menu`}</title>

      <Section className={styles.page}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li>
              <Link to={ROUTES.menu}>Menu</Link>
            </li>
            <li>
              <Link to={menuCategoryPath(category.id)}>{category.label}</Link>
            </li>
            <li aria-current="page">{item.name}</li>
          </ol>
        </nav>

        <article className={styles.product}>
          <div className={styles.media}>
            <img src={item.image} alt={item.altText || item.name} />
          </div>

          <div className={styles.details}>
            <Eyebrow>{groupLabel}</Eyebrow>
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.price}>{formatPrice(item.price)}</p>
            <p className={styles.description}>{item.description}</p>

            <AddToCart item={item} />

            <Link to={menuCategoryPath(category.id)} className={styles.back}>
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              Back to {category.label}
            </Link>
          </div>
        </article>
      </Section>

      {related.length > 0 && (
        <Section className={styles.relatedSection}>
          <div className={styles.related}>
            <SectionHeading align="left" eyebrow="You might also like" title={`More from ${groupLabel}`} />
            <Grid columns={4}>
              {related.map((relatedItem) => (
                <MenuCard key={relatedItem.slug} item={relatedItem} />
              ))}
            </Grid>
          </div>
        </Section>
      )}
    </>
  );
}

const ADDED_FEEDBACK_MS = 1800;

function AddToCart({ item }) {
  const { addItem, getQuantity } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = getQuantity(item.slug);

  useEffect(() => {
    if (!justAdded) return;
    const timer = setTimeout(() => setJustAdded(false), ADDED_FEEDBACK_MS);
    return () => clearTimeout(timer);
  }, [justAdded]);

  const handleAdd = () => {
    addItem(item.slug);
    setJustAdded(true);
  };

  return (
    <div className={styles.cartAction}>
      <Button size="lg" onClick={handleAdd} className={styles.addButton}>
        {justAdded ? (
          <>
            <i className="fa-solid fa-check" aria-hidden="true" />
            Added to cart
          </>
        ) : (
          <>
            <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
            Add to Cart
          </>
        )}
      </Button>

      <p className={styles.cartStatus} aria-live="polite">
        {inCart > 0 && (
          <>
            {inCart} in your cart ·{" "}
            <Link to={ROUTES.cart}>View cart</Link>
          </>
        )}
      </p>
    </div>
  );
}

function ItemNotFound() {
  return (
    <Section className={styles.notFound}>
      <title>Item not found | Arvane Menu</title>
      <SectionHeading
        eyebrow="Menu"
        title="We couldn't find that item"
        description="It may have been renamed or taken off the menu."
      />
      <Button to={ROUTES.menu}>Browse the Menu</Button>
    </Section>
  );
}
